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
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d+$/, 'Phone number must contain only numbers'),
  treatment_area: z.string().min(1, 'Select a treatment area'),
  service: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ConsultationForm() {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',

      phone: '',
      service: '',
      treatment_area: '',
    },
  });

  const addData = async (values: FormSchema) => {
    const res = await fetch(
      'https://api-v2.ledsak.ai/api/webhook/website/webhook',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client: '6847f5bba01e18bcbb35918d',
          source: 'website',
          branch: 'JanakPuri',
          lead_details: [
            { lead_field: 'name', lead_value: values.name },

            { lead_field: 'phone', lead_value: values.phone },
            { lead_field: 'service', lead_value: 'laser hair reduction' },
            { lead_field: 'treatment_area', lead_value: values.treatment_area },
          ],
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    router.push('/thankyou');
  };

  const onSubmit = async (values: FormSchema) => {
    console.log(values, 'value');
    try {
      await addData(values);
      form.reset();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-sm  lg:w-[450px] w-full'>
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
            name='treatment_area'
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
