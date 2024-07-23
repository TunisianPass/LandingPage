import { redirect } from "next/navigation";

export default function Page() {
  redirect('/models')
  return (
    <>
      <h1>Business Side</h1>
    </>
  );
}

export const metadata = {
  verification: {
    google: '1-7Zz5bv2FSABW_6NHwXV6pjrR-QKnCLJJ50_NOOqxs',
   
  },
}
