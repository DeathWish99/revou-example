import { ErrorMessage, Field, Formik, Form } from "formik";
import { loginUser, registerUser } from "../../api/KakAriAPI";
import { User } from "../../hooks/useFetchUser";

const RegisterForm = () => {
    
  const handleSubmit = async (values: any) => {
    // let userData = {
    //     "name" : "kevin",
    //     "email" : "kevin@email.com",
    //     "password" : "159753"
    // }

    console.log(values);

    await registerUser(values);

    let loginObj = {email: values.email, password: values.password};

    console.log(loginObj);

    let response = await loginUser(loginObj);

    console.log(response);

    //localStorage.setItem('token', response.data.token);

    console.log(localStorage.getItem('token'));
  }
    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
          <Form>
            <div className="mb-5">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <ErrorMessage name="name" component="div" />
              
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <ErrorMessage name="email" component="div" />
              
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <ErrorMessage name="password" component="div" />
            </div>
    
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </Form>
        </Formik>
    )
};

export default RegisterForm;