import React from 'react'

function ProgrMultiVerse() {
    const languagesData = [
        {
          name: 'SQL',
          year: 1970,
          creator: 'Donald D. Chamberlin, Raymond F. Boyce',
          usecase: 'Database management',
        },
        {
          name: 'C',
          year: 1972,
          creator: 'Dennis Ritchie',
          usecase: 'System programming, embedded systems',
        },
        {
          name: 'C++',
          year: 1983,
          creator: 'Bjarne Stroustrup',
          usecase: 'Game development, system software',
        },
        {
          name: 'Perl',
          year: 1987,
          creator: 'Larry Wall',
          usecase: 'Scripting, web development, automation',
        },
        {
          name: 'HTML',
          year: 1991,
          creator: 'Tim Berners-Lee',
          usecase: 'Web content structure',
        },
        {
          name: 'Python',
          year: 1991,
          creator: 'Guido van Rossum',
          usecase: 'Web development, data analysis, AI',
        },
      
        {
          name: 'Java',
          year: 1995,
          creator: 'James Gosling',
          usecase: 'Enterprise software, Android apps',
        },
        {
          name: 'JavaScript',
          year: 1995,
          creator: 'Brendan Eich',
          usecase: 'Web development, browser scripting',
        },
        {
          name: 'PHP',
          year: 1995,
          creator: 'Rasmus Lerdorf',
          usecase: 'Web development, server-side scripting',
        },
        {
          name: 'CSS',
          year: 1996,
          creator: 'Håkon Wium Lie, Bert Bos',
          usecase: 'Web page styling',
        },
        {
          name: 'C#',
          year: 2000,
          creator: 'Microsoft',
          usecase: 'Windows apps, game development',
        },
        {
          name: 'Scala',
          year: 2003,
          creator: 'Martin Odersky',
          usecase: 'Web applications, data analysis',
        },
        {
          name: 'Golang',
          year: 2009,
          creator: 'Robert Griesemer, Rob Pike, Ken Thompson',
          usecase: 'Cloud computing, microservices',
        },
        {
          name: 'Rust',
          year: 2010,
          creator: 'Graydon Hoare',
          usecase: 'Systems programming, safety',
        },
        {
          name: 'Kotlin',
          year: 2011,
          creator: 'JetBrains',
          usecase: 'Android app development, server-side',
        },
        {
          name: 'Swift',
          year: 2014,
          creator: 'Apple Inc.',
          usecase: 'iOS, macOS app development',
        },
      ];
      
  return (
    <div>
        <h1 className='text-4xl text-center py-6'>ProgrMultiVerse</h1>
        <div class="flex flex-wrap items-center justify-center gap-12">
        {
            languagesData.map((data)=>{
                return(
                <div className='border-2 w-80 p-4 rounded-lg bg-sky-200 shadow-2xl hover:animate-pulse'>
                  <h1 className='text-cyan-600 font-bold'>{data.name}</h1>
                  <p>Year of Start: {data.year}</p>
                  <p>Creator: {data.creator}</p>
                  <p>Use Case: {data.usecase}</p>
                </div>
                )
            })
        }
    </div>


    </div>
  )
}

export default ProgrMultiVerse