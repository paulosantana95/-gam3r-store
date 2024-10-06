import Link from 'next/link'

interface CheckoutHeaderProps {
  step: 'carrinho' | 'pagamento'
}

export default function CheckoutHeader(props: CheckoutHeaderProps) {
  function selectedColor(step: string) {
    return props.step === step ? 'text-pink-500' : 'text-zinc-400'
  }

  function bkSelected(step: string) {
    return props.step === step
      ? 'bg-pink-500 text-white'
      : 'bg-zinc-400 text-black'
  }

  function renderItem(
    step: 'carrinho' | 'pagamento',
    index: number,
    title: string,
    path: string,
  ) {
    return (
      <Link
        href={path}
        className={`
                    flex items-center gap-2 cursor-pointer
                    ${selectedColor(step)}
                `}
      >
        <span
          className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${bkSelected(step)}
                    `}
        >
          {index}
        </span>
        <span>{title}</span>
      </Link>
    )
  }

  return (
    <div className="flex justify-center items-center gap-6 h-20 select-none">
      {renderItem('carrinho', 1, 'Carrinho', '/checkout/cart')}
      <div className="bg-zinc-300 h-px w-12"></div>
      {renderItem('pagamento', 2, 'Pagamento', '/checkout/payment')}
    </div>
  )
}
