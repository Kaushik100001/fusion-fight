import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Leaderboard() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-center min-h-screen p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded-lg w-full max-w-xl p-8">
              <Dialog.Title as="h3" className="text-3xl font-bold mb-4 text-gray-900">
                Player 1 Victory!
              </Dialog.Title>
              <p className="text-lg text-gray-500 mb-6">Congratulations on your triumph. Do you want to play again?</p>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-green-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-600 mr-2"
                  onClick={() => setOpen(false)}
                >
                  Play again
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-gray-200 px-6 py-3 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-300"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
