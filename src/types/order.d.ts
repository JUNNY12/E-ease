interface Order {
    orderId: string;
    image: string;
    title: string;
    status: 'Delivered' | 'Pending' | 'Shipped' | 'Processing' | 'Completed' | 'Failed';
    date: Date;
}