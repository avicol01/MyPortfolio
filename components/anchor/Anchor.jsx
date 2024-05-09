import Link from 'next/link'

import {cn} from '@/lib/utils/mergeCss'

function Anchor({children, href = '/', className}) {
	return (
		<Link href={href} className={cn('text-inherit', className)}>
			{children}
		</Link>
	)
}

function AnchorContent({children, className}) {
	return <div className={cn('text-inerhit', className)}>{children}</div>
}

function AnchorIcon({children, icon, className}) {
	return <div className={cn('text-inherit', className)}> {icon}</div>
}

function AnchorLabel({children, className}) {
	return <span className={cn( className)}>{children}</span>
}

export {Anchor, AnchorContent, AnchorIcon, AnchorLabel}
