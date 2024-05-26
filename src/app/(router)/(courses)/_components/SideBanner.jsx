import React from 'react';

function SideBanner() {
    // Hard-coded data for demonstration purposes
    const sideBannerList = [
        { Banner: { url: 'https://via.placeholder.com/500x300?text=Banner+1' } },
        { Banner: { url: 'https://via.placeholder.com/500x300?text=Banner+2' } },
        { Banner: { url: 'https://via.placeholder.com/500x300?text=Banner+3' } },
    ];

    // CSS styles
    const bannerContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px'
    };

    const imageStyle = {
        borderRadius: '10px',
    };

    return (
        <div style={bannerContainerStyle}>
            {sideBannerList.map((item, index) => (
                <div key={index}>
                    <img
                        src={item.Banner.url}
                        alt={`banner ${index + 1}`}
                        width={500}
                        height={300}
                        style={imageStyle}
                    />
                </div>
            ))}
        </div>
    );
}

export default SideBanner;
