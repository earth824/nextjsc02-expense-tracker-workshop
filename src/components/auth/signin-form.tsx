'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTE } from '@/constants/route';
import { signInWithCredentials } from '@/lib/actions/auth.action';
import { signInFormSchema } from '@/lib/schemas/auth.schema';
import { SignInFormInput } from '@/types/auth.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function SignInForm() {
  const form = useForm<SignInFormInput>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: '', password: '' }
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormInput> = data => {
    startTransition(async () => {
      try {
        const res = await signInWithCredentials(data);
        if (!res.success) {
          toast.error(res.message);
        } else {
          toast.success('Signed in successfully');
          router.push(ROUTE.TRANSACTION);
        }
      } catch {
        toast.error('Something went wrong');
      }
    });
  };

  return (
    <Form {...form}>
      <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>
          {isPending ? <Loader2 className="animate-spin" /> : 'Sign In'}
        </Button>
      </form>
    </Form>
  );
}
