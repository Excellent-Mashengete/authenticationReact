import { Schema} from 'rsuite';

const { StringType } = Schema.Types;

export const model = Schema.Model({
    firstname: StringType().isRequired('Firstname is required.'),

    lastname: StringType().isRequired('Lastname is required'),

    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('This field is required.'),

    phone: StringType().isRequired('Contact Number is required'),

    password: StringType().isRequired('This field is required.'),
    
    verifyPassword: StringType()
      .addRule((value, data) => {
  
        if (value !== data.password) {
          return false;
        }
  
        return true;
      }, 'The two passwords do not match')
      .isRequired('This field is required.')
});
  