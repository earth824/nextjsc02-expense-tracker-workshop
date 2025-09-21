type Category = {
  name: string;
  type: 'expense' | 'income';
  image: string;
  sequence: number | null;
};

export const categories: Category[] = [
  {
    name: 'Automobile',
    type: 'expense',
    image: '/images/categories/automobile.png',
    sequence: null
  },
  {
    name: 'Drink',
    type: 'expense',
    image: '/images/categories/drink.png',
    sequence: null
  },
  {
    name: 'Education',
    type: 'expense',
    image: '/images/categories/education.png',
    sequence: null
  },
  {
    name: 'Entertainment',
    type: 'expense',
    image: '/images/categories/entertainment.png',
    sequence: null
  },
  {
    name: 'Food',
    type: 'expense',
    image: '/images/categories/food.png',
    sequence: null
  },
  {
    name: 'Gift',
    type: 'expense',
    image: '/images/categories/gift.png',
    sequence: null
  },
  {
    name: 'Groceries',
    type: 'expense',
    image: '/images/categories/groceries.png',
    sequence: null
  },
  {
    name: 'Health Care',
    type: 'expense',
    image: '/images/categories/health-care.png',
    sequence: null
  },
  {
    name: 'Housing',
    type: 'expense',
    image: '/images/categories/housing.png',
    sequence: null
  },
  {
    name: 'Insurance',
    type: 'expense',
    image: '/images/categories/insurance.png',
    sequence: null
  },
  {
    name: 'Investment',
    type: 'income',
    image: '/images/categories/investment.png',
    sequence: null
  },
  {
    name: 'Miscellaneous',
    type: 'expense',
    image: '/images/categories/miscellaneous.png',
    sequence: null
  },
  {
    name: 'Other',
    type: 'expense',
    image: '/images/categories/other-expense.png',
    sequence: 1
  },
  {
    name: 'Other',
    type: 'income',
    image: '/images/categories/other-income.png',
    sequence: 1
  },
  {
    name: 'Personal Care',
    type: 'expense',
    image: '/images/categories/personal-care.png',
    sequence: null
  },
  {
    name: 'Salary',
    type: 'income',
    image: '/images/categories/salary.png',
    sequence: null
  },
  {
    name: 'Shopping',
    type: 'expense',
    image: '/images/categories/shopping.png',
    sequence: null
  },
  {
    name: 'Transportation',
    type: 'expense',
    image: '/images/categories/transportation.png',
    sequence: null
  },
  {
    name: 'Travel',
    type: 'expense',
    image: '/images/categories/travel.png',
    sequence: null
  },
  {
    name: 'Utilities',
    type: 'expense',
    image: '/images/categories/utilities.png',
    sequence: null
  }
];
