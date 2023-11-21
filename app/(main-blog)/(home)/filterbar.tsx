'use client';

import { useState } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/app/lib/posts';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';



const FilterBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    // const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // active category styling
    const [open, setOpen] = useState(false); // for categories dropdown

    function handleCategoryChange(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('category', term);
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const currentCategory = searchParams.get('category')?.toString()


    const { data: categoryList } = useQuery({
        queryKey: ['getCategories'],
        queryFn: getCategories
    })

    return (
        <div className='border-b-2 border-t-2 my-12 py-6 sticky top-0 bg-gray-50'>
            <div className='md:max-w-6xl mx-auto'>
                <ul className='flex flex-wrap gap-3 justify-start md:justify-center items-center md:gap-8'>
                    {categoryList?.categories?.slice(0, 5).map((category: any) => (
                        <li key={category?.id} className='hover:cursor-pointer'>
                            <span
                                className={`text-xs rounded-full py-2 px-3 ${currentCategory === category?.name
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-gray-100 text-black'
                                    }`}
                                onClick={() => {
                                    handleCategoryChange(category?.name);
                                    // mutate(category.name);
                                }}
                            >
                                {category?.name}
                            </span>
                        </li>
                    ))}

                    <Popover open={open as any} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <span className='text-xs text-primary cursor-pointer'>
                                More Categories
                            </span>
                        </PopoverTrigger>
                        <PopoverContent className='w-[250px] p-0'>
                            <Command>
                                <CommandInput placeholder='Search category...' />
                                <CommandEmpty>No categories found.</CommandEmpty>
                                <CommandGroup>
                                    {categoryList?.categories?.slice(4).map((category: any) => (
                                        <CommandItem
                                            key={category?.id}
                                            value={category?.id}
                                            onSelect={() => {
                                                handleCategoryChange(category?.name);
                                                // mutate(category?.name);
                                                setOpen(false);
                                            }}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    currentCategory === category?.name
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                            {category?.name}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </ul>
            </div>
        </div>
    );
};

export default FilterBar;
