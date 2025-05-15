
import React from 'react'
import logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CustomTooltip from '../tooltips/CustomTooltip'

export default function Logo({ className }: { className: string }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            <CustomTooltip title="Click Back to Home">
                <Image alt='logo' height={100} width={100} className={className} src={logo} />
            </CustomTooltip>
        </div>
    )
}
