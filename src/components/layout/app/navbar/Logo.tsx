import Image from "components/core/Image.tsx"

export default function Logo() {
  return (
    <div className="flex items-center gap-2 px-6 py-4 ">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-300/20">
        <Image src="/images/logo.svg" />
      </div>
      <div>
        <div className="text-xl leading-5 text-gray-900">Nnee</div>
        <div className="text-[10px] text-gray-400">Premium - V1.0.0</div>
      </div>
    </div>
  )
}
