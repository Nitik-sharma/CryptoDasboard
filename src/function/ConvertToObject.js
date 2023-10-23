export const ConverObj = (setState, data) => {
  console.log(data);
  setState({
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image.thumb,
    desc: data.description.en,
    price_change_percentage_24h: data.price_change_percentage_24h,
    total_volume: data.market_data.total_volume.usd,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
  });
};

// symbol: data.symbol,
// image: data.image.thumb,
// dysc: data.description.en,
// price_change_percentage_24h: data.price_change_percentage_24h,
// total_volume:data.total_volume.usd,
// current_price:data.current_price.usd,
// market_cap:data.market_cap.usd
