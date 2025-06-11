'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Phone number is required'),
  service: z.string().min(1, 'Select a treatment area'),
  message: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',

      phone: '',
      service: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log('Form Data:', values);
    // handle submission here (API call etc.)
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='Phone' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='service'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment Area</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  >
                    <option value=''>Select treatment area</option>
                    <option value='face'>Face</option>
                    <option value='underarms'>Underarms</option>
                    <option value='arms'>Arms</option>
                    <option value='legs'>Legs</option>
                    <option value='bikini'>Bikini</option>
                    <option value='back'>Back</option>
                    <option value='chest'>Chest</option>
                    <option value='other'>Other</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='w-full bg-[#c6993e] hover:bg-amber-700 text-white'
          >
            Book Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
}
