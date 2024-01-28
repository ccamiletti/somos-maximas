// project import
import LAYOUT, { Props } from 'constant';
import MainLayout from './MainLayout';
import MinimalLayout from './MinimalLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import GuestGuard from 'utils/route-guard/GuestGuard';
import PublicMainLayout from './MainLayout/PublicLayOut';
// ==============================|| LAYOUTS - STRUCTURE ||============================== //

export default function PublicLayOut({ variant = LAYOUT.main, children }: Props) {
  console.log("variant =" + variant)
  switch (variant) {
    case LAYOUT.minimal:
      console.log("i am here !!!")
      return <MinimalLayout>{children}</MinimalLayout>;

    case LAYOUT.noauth:
      console.log("i am here 2!!!")
      return (
        <GuestGuard>
          <MinimalLayout>{children}</MinimalLayout>
        </GuestGuard>
      );

    default:
      console.log("i am here 3!!! children => " + children)
      return (
        <AuthGuard>
          <PublicMainLayout>{children}</PublicMainLayout>
        </AuthGuard>
      );
  }
}
