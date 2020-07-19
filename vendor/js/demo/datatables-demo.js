// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

// $(document).ready(function () {
//   $('#dataTable').DataTable({

//     columnDefs: [{
//       orderable: false,
//       className: 'select-checkbox',
//       targets: 0
//     }],
//     select: {
//       style: 'multi',
//       selector: 'td:first-child'
//     }
//   });
// });
