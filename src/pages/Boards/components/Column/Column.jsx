import React from 'react';
import Navigation from '../../../../ui/components/Navigation/Navigation';
import { StyledMain, StyledContainer, StyledMenu, StyledSection, StyledBoard } from './ColumnStyled';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RenamePopover from '../../components/BoardPopover/RenamePopover';
import { createColumn } from '../../../../store/colums';
import { getColumns } from '../../../../api/columnsRequests';
import CircularProgress from '../../../../ui/components/Spinner/Spinner';
import ColumnCard from '../Column/components/ColumnCard/ColumnCard';
import CreateColumn from '../Column/components/CreateColumn/CreateColumn';
import { Container, Draggable } from 'react-smooth-dnd';
import { setColumnsPosition } from '../../../../api/boardsRequests';

function Column() {
    const dispatch = useDispatch();
    const routParams = useParams();
    const boardId = Number(routParams.id);
    const allColumns = useSelector((state) => state.columns.allColumns);
    const [isLoading, setIsLoading] = React.useState(false);
    const allBoards = useSelector((state) => state.boards.allBoards);
    const currentBoard = allBoards.find((board) => board.id === boardId);
    const currentColumnsPosition = currentBoard.columnsPosition;
    const boardColumns = allColumns.map((column) => {
        if (column.boardId === boardId) {
            return column;
        }
        return column;
    });
    const applyDrag = (arr, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;

        if (removedIndex === null && addedIndex === null) return arr;

        const result = [...arr];
        let itemToAdd = payload;

        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0];
        }

        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd);
        }
        return result;
    };

    const onDrop = async (dropResult) => {
        
            const { removedIndex, addedIndex } = dropResult;
            if (removedIndex !== null && addedIndex !== null) {
                const newColumns = applyDrag(boardColumns, dropResult);
                const columnsPosition = newColumns.map((column) => {
                    return column.id;
                });
                dispatch(createColumn(newColumns))
                await setColumnsPosition({ boardId, columnsPosition });
            }
    };

    const getallColumns = async () => {
        setIsLoading(true);
        try {
            const response = await getColumns(boardId);
            const sortedTasksColumn = response.data.map((column) => {
                const tasks = column.Tasks;
                const sortedTasks = [];
                const { tasksPosition } = column;
                
                if (tasksPosition) {
                    for (let i = 0; i < tasksPosition.length; i++) {
                        tasks.forEach((task) => {
                            if (task.id === tasksPosition[i]) {
                                sortedTasks.push(task);
                            }
                        });
                    }
                }
                return { ...column, Tasks: sortedTasks };
            });
            // console.log(response.data)
            dispatch(createColumn(response.data));
            // if (currentColumnsPosition) {
            //     const sortedColumnsBoard = [];

            //     for (let i = 0; i < currentColumnsPosition.length; i++) {
            //         sortedTasksColumn.forEach((column) => {
            //             if (column.id === currentColumnsPosition[i]) {
            //                 sortedColumnsBoard.push(column);
            //             }
            //         });
            //     }
            //     dispatch(createColumn(sortedColumnsBoard));
            // } else {
            //     dispatch(createColumn(sortedTasksColumn));

            // }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        getallColumns();
    }, []);

    return (
        <>
            {isLoading ? (
                <>
                    <CircularProgress />
                </>
            ) : (
                    <>
                        <Navigation />
                        <StyledMain>
                            <StyledContainer>
                                <StyledMenu>
                                    <RenamePopover id={boardId} />
                                </StyledMenu>
                                <StyledSection>
                                    <StyledBoard>
                                        <CreateColumn />
                                        <Container
                                            onDrop={onDrop}
                                            groupName='groupColumns'
                                            orientation='horizontal'
                                        >
                                            {allColumns.map((column) => (
                                                <Draggable key={column.id}>
                                                    <ColumnCard
                                                        id={column.id}
                                                        key={column.id}
                                                        name={column.name}
                                                        boardId={boardId}
                                                    />
                                                </Draggable>
                                            ))}
                                        </Container>
                                    </StyledBoard>
                                </StyledSection>
                            </StyledContainer>
                        </StyledMain>
                    </>
                )}
        </>
    );
};

export default Column;