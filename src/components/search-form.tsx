import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { object as Obj, string as Str } from 'yup';

import { ArrowIcon } from '.';


interface Schema {
  ipAddress: string;
}

interface Props {
  ip: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

const ipSchema = Obj().shape({
  ipAddress: Str().trim().matches(/(^(\d{1,3}\.){3}(\d{1,3})$)/, {
    message: 'Invalid IP address',
    excludeEmptyString: true
  }).required()
});


const SearchForm: FC<Props> = ({ ip, setter }) => {
  const schemaValues: Schema = {
    ipAddress: ip
  }


  return (
    <Formik
      initialValues={schemaValues}
      validationSchema={ipSchema}
      onSubmit={async (
        { ipAddress }: Schema,
        { setSubmitting }
      ) => {
        setSubmitting(true);
        console.log({ ipAddress })
        setter(ipAddress);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, isValid }) => (
        <Form className="flex items-center w-10/12 sm:w-2/3 lg:w-1/2">
          <Field
            id="ipAddress"
            name="ipAddress"
            type="text"
            placeholder="Search for any IP address or domain"
            className={
              `w-full px-4 py-4 text-xl font-normal text-gray-900 placeholder-gray-600 rounded-l-lg focus:outline-none ${errors.ipAddress ?
                'border border-red-500 bg-red-200' :
                'focus:shadow-outline'
              }`
            }
          />
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={
              `p-6 rounded-r-lg   ${!isValid ?
                'cursor-not-allowed bg-red-500 hover:bg-red-400' :
                'bg-gray-900 hover:bg-gray-800 focus:outline-none'
              }`
            }
          >
            <ArrowIcon />
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm;