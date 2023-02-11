import { Suspense } from 'react';

import { Greeting, GreetingsSkeleton } from '@components/Greeting';
import {
  ProjectList,
  ProjectListLoader,
  CreateProject,
} from '@components/Project';
import { TaskCard } from '@components/TaskCard';

export default function Page() {
  return (
    <div className='h-full overflow-y-auto w-1/1'>
      <div className=' h-full  items-stretch justify-center min-h-[content]'>
        <div className='flex-1 grow flex'>
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-expect-error */}
            <Greeting />
          </Suspense>
        </div>
        <div className='w-full flex flex-2 grow items-center flex-wrap mt-3'>
          <Suspense fallback={<ProjectListLoader />}>
            {/* @ts-expect-error */}
            <ProjectList />
          </Suspense>
          <div className='w-1/3 p-3'>
            <CreateProject />
          </div>
        </div>
        <div className='mt-6 flex-2 grow w-full flex'>
          <div className='w-full'>
            <Suspense fallback={<ProjectListLoader />}>
              {/* @ts-expect-error */}
              <TaskCard title='Due date is near' />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
