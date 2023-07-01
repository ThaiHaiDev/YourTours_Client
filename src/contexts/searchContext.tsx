import { createContext, useState } from 'react';

interface ISearchContext {
    searchText: string;
    setSearchText: (searchText: string) => void;
    hanldSearch: boolean;
    setHanldSearch: (check: boolean) => void;
}

const SearchContext = createContext<ISearchContext | null>(null);

const SearchProvider = ({ children }: any) => {
    const [searchText, setSearchText] = useState<string>('');
    const [hanldSearch, setHanldSearch] = useState<boolean | undefined>(false);

    const value = {
        searchText,
        setSearchText,
        hanldSearch,
        setHanldSearch,
    };

    return <SearchContext.Provider value={value as ISearchContext}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
