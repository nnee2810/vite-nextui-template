import { Divider } from "@nextui-org/react"
import Image from "components/core/Image.tsx"

export default function Account() {
  return (
    <div>
      <Divider />
      <div className="flex items-center gap-2 p-4">
        <div className="relative flex">
          <Image
            src="https://placehold.co/200x200"
            className="h-10 w-10 rounded-full"
          />
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border bg-emerald-500"></div>
        </div>
        <div>
          <div className="text-lg leading-6 text-gray-900">Nnee</div>
          <div className="text-sm leading-4 text-slate-600">Active</div>
        </div>
      </div>
    </div>
  )
}
