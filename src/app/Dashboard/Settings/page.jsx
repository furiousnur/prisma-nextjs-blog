import {headers} from "next/headers";
import {PrismaClient} from "@prisma/client";

async function getData() {
  let headerList=headers();
  let user_id=parseInt(headerList.get('id'));
  const prisma=new PrismaClient();
  return await prisma.users.findUnique({where:{id:user_id}})
}

import Settings from "@/components/Dashboard/Settings";
export default async function page() {
  const data = await getData();
  return (
      <Settings propData={data}/>
  )
}
