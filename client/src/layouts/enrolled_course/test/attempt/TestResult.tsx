import React from 'react'
import { Test } from '@/store/interface/tests';

export default function TestResult({ test }: { test: Test }) {
  return (
    <div>
      <h1>Test Result</h1>
      <p>Score: 10/10</p>
      <p>Correct: 10/10</p>
      <p>Incorrect: 0/10</p>
      <p>Unanswered: 0/10</p>
      <div>
              
      </div>
    </div>
  )
}
