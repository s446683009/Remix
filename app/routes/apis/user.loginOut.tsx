import { ActionArgs } from '@remix-run/node';
import {auth} from '../../utils/auth.server'

export async function action({ request }: ActionArgs) {
    await auth.logout(request, { redirectTo: "/login" });
  };