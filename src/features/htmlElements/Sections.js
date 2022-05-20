import React from 'react'

export default function Sections({children, classes=""}) {
  return (
    <section className={`container my-40 md:my-128 mx-auto space-y-6 max-w-3xl ${classes}`}>
        {children}
    </section>
    )
}
