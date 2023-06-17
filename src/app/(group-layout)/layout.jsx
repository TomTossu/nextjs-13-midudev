function Layout({ children }) {
    return (
        <div>
            <marquee style={{ background: '#fff', color: 'purple' }}> BANNER </marquee>
            {children}
        </div>
    )
}

export default Layout