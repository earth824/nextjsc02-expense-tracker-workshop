'use server';

import { signUpFormSchema } from '@/lib/schemas/auth.schema';
import { ActionResult } from '@/types/action-result.type';
import z from 'zod';
import * as authService from '@/lib/services/auth.service';

export async function signUpWithCredentials(
  input: unknown
): Promise<ActionResult> {
  const { data, success, error } = signUpFormSchema.safeParse(input);
  if (!success)
    return {
      success: false,
      message: 'Validation failed',
      details: z.flattenError(error)
    };

  // DECIDE OPTION 1.EXTERNAL API SENT REQUSET WITH DATA
  //        OPTION 2.CHECK EMAIL EXIST, HASH PASSWORD, INSERT INTO DATABASE
  try {
    const res = await authService.signUpWithCredentials(data);
    if (res) {
      return { success: false, message: 'Email already exists', details: res };
    }

    return { success: true };
  } catch {
    return { success: false, message: 'Unexpected error occured' };
  }
}
