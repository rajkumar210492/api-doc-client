import { IService } from '~/interfaces';

export const saveCard: IService = {
  id: 'save_card',
  name: 'Save Card',
  description: [
    `When you create a new credit card, you must specify a customer or recipient on which to create it. This method saves a new card to the database.`,
  ],
  endpoint: {
    method: 'post',
    url: '/v1/card',
    params: [
      {
        required: true,
        attributeId: 'card_number',
      },
      {
        required: true,
        attributeId: 'cardholder_name',
      },
      {
        required: true,
        attributeId: 'exp_month',
      },
      {
        required: true,
        attributeId: 'exp_month',
      },
      {
        required: true,
        attributeId: 'cvc',
      },
      {
        required: true,
        attributeId: 'customer',
      },
    ],
    response: {
      type: 'application/json',
      data: {
        status: true,
        card_id: 'card_6317a39ec2414',
        message: 'Card saved successfully. ',
        card_last_4: '1111',
      },
    },
  },
};
