"use server";

import { db } from "@/firebase/admin";
import { log } from "console";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const logInterview = await db.collection("interviews").where("userId", "==", userId).get();
  
  console.log("log interview by id size",logInterview.size)
  logInterview.docs.forEach(doc => console.log(doc.id, doc.data()));

  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createAt", "desc")
    .get();
  console.log("interview by id size",interviews.size)
  interviews.docs.forEach(doc => console.log(doc.id, doc.data()));

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatesetInverviews(params: GetLatestInterviewsParams): Promise<Interview[]| null> {
  const {userId, limit = 20} = params;
  const interviews = await db
    .collection('interviews')
    .orderBy('createAt', 'desc')
    .where('finalized','==',true)
    .where('userId','!=',userId)
    .limit(limit)
    .get();
    
  return interviews.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
  })) as Interview[]
}

export async function getInverviewsByID(id:string ): Promise<Interview| null> {
  const interviews = await db
    .collection('interviews')
    .doc(id)
    .get();
    
  return interviews.data() as Interview|null;
}