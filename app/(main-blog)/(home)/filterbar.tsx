// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from '@/components/ui/command';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { CheckIcon } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const FilterBar = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // active category styling
//   const [open, setOpen] = useState(false); // for categories dropdown

//   return (
//     <div className='border-b-2 border-t-2 my-12 py-6 sticky top-0 bg-gray-50'>
//       <div className='md:max-w-6xl mx-auto'>
//         <ul className='flex flex-wrap gap-3 justify-start md:justify-center items-center md:gap-8'>
//           {categoryNamesData?.categories?.slice(0, 5).map((category) => (
//             <li key={category?.id} className='hover:cursor-pointer'>
//               <span
//                 className={`text-xs rounded-full py-2 px-3 ${
//                   selectedCategory === category.name
//                     ? 'bg-primary-500 text-white'
//                     : 'bg-gray-100 text-black'
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory(category.name);
//                   // mutate(category.name);
//                 }}
//               >
//                 {category?.name}
//               </span>
//             </li>
//           ))}

//           <Popover open={open as any} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//               <span className='text-xs text-primary cursor-pointer'>
//                 More Categories
//               </span>
//             </PopoverTrigger>
//             <PopoverContent className='w-[250px] p-0'>
//               <Command>
//                 <CommandInput placeholder='Search category...' />
//                 <CommandEmpty>No categories found.</CommandEmpty>
//                 <CommandGroup>
//                   {categoryNamesData?.categories?.slice(4).map((category) => (
//                     <CommandItem
//                       key={category?.id}
//                       value={category?.id}
//                       onSelect={() => {
//                         setSelectedCategory(category?.name);
//                         // mutate(category?.name);
//                         setOpen(false);
//                       }}
//                     >
//                       <CheckIcon
//                         className={cn(
//                           'mr-2 h-4 w-4',
//                           selectedCategory === category?.name
//                             ? 'opacity-100'
//                             : 'opacity-0'
//                         )}
//                       />
//                       {category?.name}
//                     </CommandItem>
//                   ))}
//                 </CommandGroup>
//               </Command>
//             </PopoverContent>
//           </Popover>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
