
import React from 'react'
import Link from 'next/link'

function ListItem() {
    return (
        <div>
            <Link prefetch href="/">

                <button>button theme</button>
            </Link>
            <Link prefetch href="/username">

                <button>username</button>
            </Link>
            <Link prefetch href="/quiz">

                <button>quiz</button>
            </Link>
        </div>
    )
}

export default ListItem