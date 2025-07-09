// Đảm bảo DOM đã tải xong trước khi chạy script
document.addEventListener('DOMContentLoaded', function() {
    // Chọn tất cả các phần tử có class 'note-trigger'
    const noteTriggers = document.querySelectorAll('.note-trigger');

    // Lặp qua từng phần tử 'note-trigger' và thêm sự kiện click
    noteTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Tìm phần tử 'note-content' bên trong 'note-trigger' hiện tại
            const noteContent = this.querySelector('.note-content');

            // Nếu tìm thấy 'note-content'
            if (noteContent) {
                // Kiểm tra trạng thái hiển thị hiện tại của 'note-content'
                // Nếu đang ẩn (display là 'none' hoặc chuỗi rỗng khi chưa set)
                if (noteContent.style.display === 'none' || noteContent.style.display === '') {
                    // Thì hiện nó lên thành 'inline' (để nó nằm cùng dòng với text)
                    noteContent.style.display = 'inline';
                } else {
                    // Ngược lại, nếu đang hiện, thì ẩn nó đi
                    noteContent.style.display = 'none';
                }
            }
        });
    });
});