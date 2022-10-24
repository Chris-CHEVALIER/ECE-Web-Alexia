export const db = [{
  id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
  title: 'My article 1',
  content: 'Content of the article 1.',
  date: '01/01/2001',
  author: 'Antoine BERTRAND'
}, {
  id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae1b',
  title: 'My article 2',
  content: 'Content of the article 2.',
  date: '02/02/2002',
  author: 'Alexia BESNARD'
}, {
  id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae2b',
  title: 'My article 3',
  content: 'Content of the article 3.',
  date: '03/03/2003',
  author: '??'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}
