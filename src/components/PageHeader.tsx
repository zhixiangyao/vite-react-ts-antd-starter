import clsx from 'clsx'

interface Props {
  className?: string
  title?: React.ReactNode
}

function PageHeader({ className, title }: Props) {
  if (title === undefined)
    return null

  return (
    <div className={clsx(className, 'flex justify-between')}>
      <div className="my-1 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold leading-8 text-[rgba(0,0,0,0.88)]">
        {title}
      </div>
    </div>
  )
}

export { PageHeader }
