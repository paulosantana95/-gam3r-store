import { PaymentMethod } from '@gstore/core'

export interface SelectPaymentMethodProps {
    paymentMethod?: PaymentMethod
    paymentMethodChanged?: (value: PaymentMethod) => void
    className?: string
}

export default function SelectPaymentMethod(
    props: SelectPaymentMethodProps,
) {
    function renderizarItem(label: string, type: PaymentMethod) {
        const selecionado = props.paymentMethod === type
        return (
            <button
                className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
                onClick={() => props.paymentMethodChanged?.(type)}
            >
                <span
                    className={`
                        ${selecionado ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-white'}
                        w-5 h-5 border-2 rounded-full
                    `}
                ></span>
                <span>{label}</span>
            </button>
        )
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Forma de Pagamento
            </span>
            <div className="flex flex-col gap-3">
                {renderizarItem('Pagamento no PIX', PaymentMethod.PIX)}
                {renderizarItem('Boleto Bancário', PaymentMethod.BOLETO)}
                {renderizarItem('Cartão de Crédito', PaymentMethod.CREDIT_CARD)}
            </div>
        </div>
    )
}
