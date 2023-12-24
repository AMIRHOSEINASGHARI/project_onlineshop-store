"use client";

import Loader from "@/components/shared/Loader";
import { shorterText } from "@/utils/functions";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiCommentAdd } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const AddComment = ({ productTitle, productId }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //TODO: submit form
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="border-2 border-primary text-primary hover:bg-blue-100 transition-all duration-100 flex items-center justify-center rounded-xl py-3 px-6 gap-2"
      >
        <span className="text-sm font-semibold">Add Comment</span>{" "}
        <div className="text-[20px]">
          <BiCommentAdd />
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="div" className="text-gray-500 mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-lg font-medium">Your Comment</h1>
                      <button onClick={() => closeModal()}>
                        <IoCloseSharp className="text-[30px]" />
                      </button>
                    </div>
                    <p className="text-[10px]">
                      About {shorterText(productTitle, 50)}
                    </p>
                    <hr className="my-2" />
                  </Dialog.Title>
                  <form className="space-y-5" onSubmit={submitHandler}>
                    <div className="space-y-1.5">
                      <label className="font-bold text-sm">
                        Comment Title *
                      </label>
                      <input
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={changeHandler}
                        className="placeholder:text-sm w-full rounded-xl border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-2 px-4"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-sm">Description *</label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={changeHandler}
                        className="placeholder:text-sm w-full rounded-xl border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-2 px-4"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white rounded-xl w-full font-bold text-md py-3 flex items-center justify-center"
                    >
                      {loading ? <Loader w={30} h={26} /> : "Submit"}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddComment;
