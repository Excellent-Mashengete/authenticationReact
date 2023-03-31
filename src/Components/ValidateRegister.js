import { Schema} from 'rsuite';

const { StringType } = Schema.Types;

export const model = Schema.Model({
    firstname: StringType().isRequired('Firstname is required.'),

    lastname: StringType().isRequired('Lastname is required'),

    username: StringType().isRequired('Username is required'),

    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('Email is required.'),

    phone: StringType().isRequired('Contact Number is required'),

    password: StringType().isRequired('Password is required.'),
    
    verifyPassword: StringType()
      .addRule((value, data) => {
  
        if (value !== data.password) {
          return false;
        }
  
        return true;
      }, 'The two passwords do not match')
      .isRequired('Confirm Password is required.')
});
  