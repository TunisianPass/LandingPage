import { redirect } from "next/navigation";

export default function Home() {
  
  if(1 == 1){
    redirect('/models')
  }
  else{
    return (
      <>
        Error
      </>
    );
  }

}