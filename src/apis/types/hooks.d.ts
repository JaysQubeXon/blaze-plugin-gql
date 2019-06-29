export interface NewConsumerOrder {
  consumerOrderId: string;
  consumerOrderNo: string;
  consumerName: string;
  memeberName: string;
  orderTime: number;
}

export interface UpdateConsumerOrder extends NewConsumerOrder {
  orderStatus:
    | "InProgress"
    | "Placed"
    | "Accepted"
    | "Completed"
    | "Declined"
    | "CanceledByConsumer"
    | "CanceledByDispensary";
}

export type BlazeWebhook<Type = NewConsumerOrder | UpdateConsumerOrder> = Type;

/**
 * Other webhook types:
 *
 * New Consumer Signup
 * New Member
 * Update Member
 * Complete Transaction
 * Update Product
 */
