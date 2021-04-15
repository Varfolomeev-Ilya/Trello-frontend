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

function Column() {
    const dispatch = useDispatch();
    const routParams = useParams();
    const boardId = Number(routParams.id);
    const allColumns = useSelector((state) => state.columns.allColumns);

    const [isLoading, setIsLoading] = React.useState(false);

    const getallColumns = async () => {
        setIsLoading(true);
        try {
            const response = await getColumns(boardId);
            dispatch(createColumn(response.data));
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
                                <RenamePopover id={boardId}/>
                            </StyledMenu>
                            <StyledSection>
                                <StyledBoard>
                                    <CreateColumn/>
                                      {allColumns.map((column) => (
                                        <ColumnCard
                                          id={column.id}
                                          key={column.id}
                                          name={column.name}
                                        />
                                      ))}
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