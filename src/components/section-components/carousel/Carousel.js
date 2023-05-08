/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import React, { useEffect } from 'react';

const slideWidth = 30;

const _items = [
    {
        player: {
            title: '6.9M',
            desc: 'Bulgari Residences & Mansions',
            image: 'https://www.cotedazur-sothebysrealty.com/datas/biens/images/1743/1743_00-2022-08-25-1644.jpg',
        },
    },
    {
        player: {
            title: "14M",
            desc: "One at Palm Jumeirah",
            image: 'https://jbr-beach-walk-penthouse-floor-41-apartment-dubai.booked.net/data/Photos/OriginalPhoto/11500/1150011/1150011724/Dubai-Jbr-Amazing-Penthouse-With-Stunning-View-Apartment-Exterior.JPEG',
        },
    },
    {
        player: {
            title: '7.2M',
            desc: 'The royal Atlantis Residences',
            image: 'https://image.khaleejtimes.com/?uuid=2efd5ba5-175e-5d97-b0e1-b7b4221a3091&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99911&x=0&y=0&width=1200&height=675',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Bulgari Residences & Mansions',
            image: 'https://www.tlre.ae/wp-content/uploads/2021/02/PHOTO-2021-02-03-11-49-55-4.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'One at Palm Jumeriah',
            image: 'https://image.khaleejtimes.com/?uuid=70155bf4-f02b-556b-9520-687ef8a8f8dc&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.86042&width=1200&height=675&x=1.0E-5&y=0.13958',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="ltn__img-slider-area">
				<div className="container-fluid">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
                    <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                {/* <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div> */}
            </div>
        </div>
					</div>
					
				</div>
				</div>
			</div>
      
    );
};
export default Carousel

