import React from 'react'
import type { Test } from '@/store/interface/tests';
import DnDContainer from '@/components/drag&drop/match_information/DnDContainer';
import convertStringToArray from '@/utilities/convert/convertStringToArray';

interface MatchingInformationProps {
    test: Test;
    onAnswered?: () => void;
    showAnswer?: boolean;
}
export default function MatchingInformation({test, onAnswered, showAnswer}: MatchingInformationProps) {
    const options = convertStringToArray(test.options).map((item, index) => ({
        id: (index + 1).toString(),
        label: item,
      }));
      
      const answers = convertStringToArray(test.answers).map((item, index) => ({
        id: (index + 1).toString(),
        label: item,
      }));
    
    return (
    <DnDContainer options={options} answers={answers} onAnswered={onAnswered} />
  )
}
