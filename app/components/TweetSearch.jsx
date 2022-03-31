import Link from "next/link";
import { toRefs } from "vue";

export default function TweetSearch() {
  const emit = defineEmits(["search", "update:modelValue"]);
  const props = defineProps({
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
  });

  const { modelValue, placeholder, disabled } = toRefs(props);
  return (
    // <Home>
    <div className="relative border-b">
      <input
        type="text"
        className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
        placeholder="placeholder"
        value="modelValue"
        input="emit('update:modelValue', $event.target.value)"
        keydownenter="emit('search')"
      />
      <div
        className="absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2"
        className="modelValue ? 'text-gray-700' : 'text-gray-400'"
      >
        <slot name="icon"></slot>
      </div>
      <div className="absolute right-0 inset-y-0 flex items-center pr-8">
        <button
          className="rounded-full px-4 py-1 font-semibold"
          className="! disabled ? 'text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white' : 'text-gray-400 bg-gray-200 cursor-not-allowed'"
          disabled="disabled"
          click="emit('search')"
        >
          Search
        </button>
      </div>
    </div>
    // </Home>
  );
}
