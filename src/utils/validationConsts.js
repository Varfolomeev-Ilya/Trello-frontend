export const EMAIL_LENGTH = 25;
export const EMAIL_LENGTH_MESSAGE = 'Email must be shorter than 20 characters';
export const EMAIL_REQUIRED_MESSAGE = 'Please Enter your email';
export const EMAIL_MATCHES = /^((([0-9A-Za-z]{1}[-0-9A-z*.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я*.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})/;
export const EMAIL_MATCHES_MESSAGE = 'email can only contain Latin letters';

export const PASSWORD_LENGTH = 8;
export const PASSWORD_LENGTH_MESSAGE = 'Password should be longer than 8 characters';
export const PASSWORD_REQIERED_MESSAGE = 'Please Enter your password';
export const PASSWORD_MATCHES = /[a-zA-Z]*[0-9]/;
export const PASSWORD_MATCHES_MESSAGE = 'Password can only contain Latin letters, and numbers';

export const NAME_LENGTH = 3;
export const NAME_LENGTH_MESSAGE = 'Field should be longer than 3 characters';
export const NAME_REQUIRED_MESSAGE = 'Please fill in the field';
export const NAME_MATCHES = /[a-zA-Z]/;
export const NAME_MATCHES_MESSAGE = 'the field must contain uppercase and lowercase Latin letters';

export const ABOUTME_MIN_LENGTH = 10;
export const ABOUTME_LENGTH_MESSAGE = 'Aboutme should be longer than 10 characters and shorter than 250 characters';
export const ABOUTME_MAX_LENGTH = 250;
export const ABOUTME_REQUIRED_MESSAGE = 'Please Enter your information';
export const ABOUTME_MATCHES = /[a-zA-Z]/;
export const ABOUTME_MATCHES_MESSAGE = 'Your information can only contain Latin letters';

export const NUMB_MATCHES = /[0-9]/;
export const NUMB_MATCHES_MESSAGE = 'Id information can only contain numbers';

export const CREATEDAT_MATCHES = /[0-9]*[:,-]*[a-zA-Z]/;
export const CREATEDAT_MATCHES_MESSAGE = 'Created At can only contain format 0000-00-00T00:00:00.000Z';
export const CREATEDAT_MIN_LENGTH = 23;
export const CREATEDAT_MAX_LENGTH = 24;
export const CREATEDAT_LENGTH_MESSAGE = 'CREATEDAT should be 24 characters';





