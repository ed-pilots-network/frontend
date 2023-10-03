import React from 'react';
import { Button, keyframes } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

interface ExpandIconProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandIcon = ({ isExpanded, setIsExpanded }: ExpandIconProps) => {
  const rotate = keyframes`
      from {transform: rotate(180deg);}
      to {transform: rotate(360deg);}
    `;

  return (
    <Button onClick={() => setIsExpanded(!isExpanded)} variant="unstyled">
      {isExpanded ? (
        <ChevronUpIcon
          boxSize={10}
          color="orange.3"
          animation={`${rotate} 0.3s linear`}
        />
      ) : (
        <ChevronDownIcon
          boxSize={10}
          color="orange.3"
          animation={`${rotate} 0.3s linear`}
        />
      )}
    </Button>
  );
};

export default ExpandIcon;
