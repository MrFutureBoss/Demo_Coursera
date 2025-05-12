import React from 'react'

interface TimeRemainProps {
    time: number; // time in minutes
    onTimeUp?: () => void;
}

export default function TimeRemain({ time, onTimeUp }: TimeRemainProps) {
    const [countdown, setCountdown] = React.useState(time * 60);
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const totalSeconds = time * 60;
    const elapsed = totalSeconds - countdown;
    const percentElapsed = (elapsed / totalSeconds) * 100;
    const isDanger = percentElapsed >= 90;
    const calledRef = React.useRef(false);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 0) {
                    clearInterval(timer);
                    if (!calledRef.current && typeof onTimeUp === 'function') {
                        calledRef.current = true;
                        onTimeUp();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [time, onTimeUp]);

    const formatTime = (num: number) => num.toString().padStart(2, '0');

    return (
        <div style={{ color: isDanger ? 'red' : undefined }}>
            {formatTime(minutes)}:{formatTime(seconds)}
        </div>
    )
}