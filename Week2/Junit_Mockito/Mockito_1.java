
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class ExternalApi{

    public String getData() {
        return "Data";
    }
}
class Service {
    private ExternalApi api;

    public Service(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}

public class Mockito_1 {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        Service service = new Service(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
    
}
