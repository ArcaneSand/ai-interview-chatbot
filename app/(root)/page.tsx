import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getInverviewsByID, getLatesetInverviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!), 
    await getLatesetInverviews({userId:user?.id!})
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcommingInterviews = latestInterviews?.length > 0;
  const testInterview = await getInverviewsByID('getInverviewsByID');
  console.log(testInterview);
  console.log(latestInterviews);

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview question & get instant feedback to ace your next job interview.
          </p>

          <Button asChild className='btn-primary max-ms:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>
        <Image src='/robot.png' alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2> Your Interviews</h2>

        <div className='interviews-section'>
          {
            hasPastInterviews ? (
              userInterviews?.map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
              ))):
              <p> You have&apos;t taken any interviews yet.</p>
          }
        </div> 
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {
            hasUpcommingInterviews ? (
              latestInterviews?.map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
              ))):
              <p> There are no new interview available.</p>
          }
        </div>
      </section>

    </>
  )
}

export default page