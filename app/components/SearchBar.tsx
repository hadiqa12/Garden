"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { searchContent, SearchResult } from './searchData'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleResultClick = () => {
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search gardening info..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          onFocus={() => query && setIsOpen(true)}
        />
        <button
          className="search-button"
          onClick={() => setQuery('')}
          aria-label="Clear search"
        >
          {query ? '×' : '🔍'}
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              onClick={handleResultClick}
              className="search-result-item"
            >
              <div className="search-result-title">{result.title}</div>
              <div className="search-result-content">
                {result.content.length > 100
                  ? `${result.content.substring(0, 100)}...`
                  : result.content
                }
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="search-results">
          <div className="search-no-results">No results found for &quot;{query}&quot;</div>
        </div>
      )}
    </div>
  )
}