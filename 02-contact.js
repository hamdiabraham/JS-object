const contacts = [
  {
    Id: 1,
    name: "Andi",
    gender: "male",
    group_ids: [1, 2, 3],
  },
  {
    Id: 2,
    name: "Budi",
    gender: "male",
    group_ids: [1, 2],
  },
  {
    Id: 3,
    name: "Cindy",
    gender: "male",
    group_ids: [1],
  },
  {
    Id: 4,
    name: "David",
    gender: "male",
    group_ids: [1, 2],
  },
  {
    Id: 5,
    name: "Emily",
    gender: "male",
    group_ids: [1, 2, 3],
  },
];

const groups = [
  {
    id: 1,
    name: "Teman SMP",
  },
  {
    id: 2,
    name: "Teman SMA",
  },
  {
    id: 3,
    name: "Teman Kuliah",
  },
];


function showContactByGroup(group_name) {
  let output = [];
  let id

  for (let i = 0; i < groups.length; i++) {
    let grup = groups[i].name
    if (grup === group_name) id = groups[i].id
  }

  // console.log(id);
  for (let i = 0; i < contacts.length; i++) {
    let name = contacts[i].name
    let groupContact = contacts[i].group_ids
    let isGroup = false
    for (let j = 0; j < groupContact.length; j++) {
      if (id === groupContact[j]) isGroup = true
    }
    if (isGroup == true) output.push(name)
  }
  console.log(output);
}

showContactByGroup("Teman Kuliah");
showContactByGroup("Teman SMA");
showContactByGroup("Teman SMP");
