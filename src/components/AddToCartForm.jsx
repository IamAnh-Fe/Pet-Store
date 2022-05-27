import React from "react";
import {yupResolver} from '@hookform/resolvers/yup'
// import InputField from 'components/form-controls/InputField'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
const AddToCartForm = ({onSubmit = null}) => {
    const schema = yup.object().shape({
  quantity: yup.number().min(1, 'please enter at least 1').required('Please enter quantity')
})
const form = useForm({
    defaultValues: {
       quantity: 1,
    },
    resolver: yupResolver(schema),
})
const handleSubmit = async (values) => {
    if(onSubmit) {
        await onSubmit(values)
    }
}

    return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
{/* <InputField name="quantity" label="quantity" form={form}/> */}
{/* <Button type ="submit"> Add to cart</Button> */}
      </form>
        
    )
}
export default AddToCartForm;
